package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Ticket;

public class TicketDAO implements TicketOperations {
    private final String url = "jdbc:mysql://localhost:3306/railwayreservation";
    private final String username = "root";
    private final String password = "@Vikey0424";

    // Database connection method (private for encapsulation)
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, username, password);
    }

    // Method to book a ticket (from TicketOperations interface)
    @Override
    public boolean bookTicket(Ticket ticket) {
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "INSERT INTO tickets (user_id, train_id, reservation_date, status) VALUES (?, ?, ?, ?)")) {

            preparedStatement.setInt(1, ticket.getUserId());
            preparedStatement.setInt(2, ticket.getTrainId());
            preparedStatement.setString(3, ticket.getReservationDate());
            preparedStatement.setString(4, ticket.getStatus());

            int rowsInserted = preparedStatement.executeUpdate();
            return rowsInserted > 0;

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    // Method to cancel a ticket (from TicketOperations interface)
    @Override
    public boolean cancelTicket(int ticketId) {
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "DELETE FROM tickets WHERE ticket_id = ?")) {

            preparedStatement.setInt(1, ticketId);

            int rowsDeleted = preparedStatement.executeUpdate();
            return rowsDeleted > 0;

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

 // Method to view tickets based on userId 
    public List<Ticket> viewTicketsByUserId(int userId) {
        List<Ticket> tickets = new ArrayList<>();
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "SELECT * FROM tickets WHERE user_id = ?")) {

            preparedStatement.setInt(1, userId);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int ticketId = resultSet.getInt("ticket_id");
                int trainId = resultSet.getInt("train_id");
                String reservationDate = resultSet.getString("reservation_date");
                String status = resultSet.getString("status");

                Ticket ticket = new Ticket(ticketId, userId, trainId, reservationDate, status);
                tickets.add(ticket);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return tickets;
    }
}
