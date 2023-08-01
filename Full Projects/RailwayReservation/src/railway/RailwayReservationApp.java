package railway;

import java.util.List;
import java.util.Scanner;

import dao.SearchTrain;

import dao.TicketDAO;
import dao.TicketOperations;
import model.Ticket;
import model.Train;

public class RailwayReservationApp {
    private static final Scanner scanner = new Scanner(System.in);
    private static final SearchTrain searchTrainDAO = new SearchTrain();
    private static final TicketOperations ticketOperations = new TicketDAO();

 

    public static void main(String[] args) {
        System.out.println("Welcome to Railway Reservation System!");

        while (true) {
            System.out.println("\nPlease select an option:");
            System.out.println("1. Search for trains");
            System.out.println("2. Book a ticket");
            System.out.println("3. Cancel a ticket");
            System.out.println("4. View booked tickets");
            System.out.println("5. Exit");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character after reading the integer input

            switch (choice) {
                case 1:
                    searchTrains();
                    break;
                case 2:
                    bookTicket();
                    break;
                case 3:
                    cancelTicket();
                    break;
                case 4:
                	viewTicketsByUserId();
                    break;
                
                case 5:
                    System.out.println("Thank you for using the Railway Reservation System. Goodbye!");
                    scanner.close();
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Please select a valid option.");
            }
        }
    }

    private static void searchTrains() {
        System.out.println("\nSearch Trains:");
        System.out.println("Enter source station:");
        String source = scanner.nextLine();

        System.out.println("Enter destination station:");
        String destination = scanner.nextLine();

        List<Train> trains = searchTrainDAO.searchTrains(source, destination);
        if (!trains.isEmpty()) {
            System.out.println("\nFound Trains:");
            System.out.println("Train ID | Train Name    | Source Station | Destination Station | Departure Time | Arrival Time   | Total Seats");
            for (Train train : trains) {
                System.out.println(trainFormattedString(train));
            }
        } else {
            System.out.println("\nNo trains found for the given source and destination.");
        }
    }

    private static void bookTicket() {
        System.out.println("\nBook Ticket:");
        System.out.println("Enter User ID:");
        int userId = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Enter Train ID:");
        int trainId = scanner.nextInt();
        scanner.nextLine();
        
        System.out.println("Enter Reservation Date (yyyy-mm-dd):");
        String reservationDate = scanner.nextLine();

        // You can set the status as "Confirmed" for a new booking
        String status = "Confirmed";

        Ticket ticket = new Ticket(1, userId, trainId, reservationDate, status);

        boolean isBooked = ticketOperations.bookTicket(ticket);
        if (isBooked) {
            System.out.println("Ticket successfully booked!");
        } else {
            System.out.println("Ticket booking failed. Please try again.");
        }
    }

    private static void cancelTicket() {
        System.out.println("\nCancel Ticket:");
        System.out.println("Enter Ticket ID to cancel:");
        int ticketIdToCancel = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character after reading the integer input

        boolean isCanceled = ticketOperations.cancelTicket(ticketIdToCancel);
        if (isCanceled) {
            System.out.println("Ticket with ID " + ticketIdToCancel + " has been canceled.");
        } else {
            System.out.println("Ticket with ID " + ticketIdToCancel + " not found. Cancellation failed.");
        }
    }
    private static void viewTicketsByUserId() {
        System.out.println("\nView Tickets by User ID:");
        System.out.println("Enter User ID:");
        int userId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character after reading the integer input

        List<Ticket> tickets = ticketOperations.viewTicketsByUserId(userId);
        if (!tickets.isEmpty()) {
            System.out.println("\nTickets for User ID " + userId + ":");
            System.out.println("**************************************************************************");
            System.out.println("Ticket ID | User ID   | Train ID  | Reservation Date | Status");
            for (Ticket ticket : tickets) {
                System.out.println(ticketFormattedString(ticket));
                System.out.println("**************************************************************************");
            }
        } else {
            System.out.println("\nNo tickets found for User ID " + userId + ".");
        }
    }

    

    // Format the Train object as a formatted string
    private static String trainFormattedString(Train train) {
        return String.format("%-8d | %-14s | %-15s | %-20s | %-13s | %-13s | %-10d",
                train.getTrainId(), train.getTrainName(), train.getSourceStation(), train.getDestinationStation(),
                train.getDepartureTime(), train.getArrivalTime(), train.getTotalSeats());
    }

    // Format the Ticket object as a formatted string
    private static String ticketFormattedString(Ticket ticket) {
        return String.format("%-9d | %-9d | %-9d | %-17s | %-10s",
                ticket.getTicketId(), ticket.getUserId(), ticket.getTrainId(),
                ticket.getReservationDate(), ticket.getStatus());
    }
}
