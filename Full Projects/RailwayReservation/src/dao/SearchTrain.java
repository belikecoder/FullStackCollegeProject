package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Train;

public class SearchTrain {
    private final String url = "jdbc:mysql://localhost:3306/railwayreservation";
    private final String username = "root";
    private final String password = "@Vikey0424";

    // Database connection method (private for encapsulation)
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, username, password);
    }

    // Method to search using source and destination station
    public List<Train> searchTrains(String source, String destination) {
        List<Train> trains = new ArrayList<>();

        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "SELECT * FROM trains WHERE source_station = ? AND destination_station = ?")) {

            preparedStatement.setString(1, source);
            preparedStatement.setString(2, destination);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int trainId = resultSet.getInt("train_id");
                String trainName = resultSet.getString("train_name");
                String departureTime = resultSet.getString("departure_time");
                String arrivalTime = resultSet.getString("arrival_time");
                int totalSeats = resultSet.getInt("total_seats");

                Train train = new Train(trainId, trainName, source, destination, departureTime, arrivalTime, totalSeats);
                trains.add(train);
            }
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return trains;
    }
}
