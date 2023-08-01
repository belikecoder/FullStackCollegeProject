package dao;

import java.util.List;

import model.Ticket;

public interface TicketOperations {
    boolean bookTicket(Ticket ticket);
    boolean cancelTicket(int ticketId);
    List<Ticket> viewTicketsByUserId(int userId);
}