package model;

import java.util.List;

public class Ticket {
    private int ticketId;
    private int userId;
    private int trainId;
    private String reservationDate;
    private String status;
    private List<Passenger> passengers;

    public Ticket(int ticketId, int userId, int trainId, String reservationDate, String status) {
        this.ticketId = ticketId;
        this.userId = userId;
        this.trainId = trainId;
        this.reservationDate = reservationDate;
        this.status = status;
    }

    
    
    // toString() method for easy printing (abstraction)

    @Override
    public String toString() {
        return "Ticket [ticketId=" + ticketId + ", userId=" + userId + ", trainId=" + trainId
                + ", reservationDate=" + reservationDate + ", status=" + status + "]";
    }
 // Getters and setters for all attributes (encapsulation)
	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getTrainId() {
		return trainId;
	}

	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}

	public String getReservationDate() {
		return reservationDate;
	}

	public void setReservationDate(String reservationDate) {
		this.reservationDate = reservationDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<Passenger> getPassengers() {
		return passengers;
	}

	public void setPassengers(List<Passenger> passengers) {
		this.passengers = passengers;
	}
}
