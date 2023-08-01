package model;

public class Passenger {
    private int passengerId;
    private int ticketId;
    private String passengerName;
    private int age;
    private String gender;
    private String seatNumber;

    public Passenger(int passengerId, int ticketId, String passengerName, int age, String gender, String seatNumber) {
        this.passengerId = passengerId;
        this.ticketId = ticketId;
        this.passengerName = passengerName;
        this.age = age;
        this.gender = gender;
        this.seatNumber = seatNumber;
    }

    
    //Getters settera code for(Encapsulation)

    public int getPassengerId() {
		return passengerId;
	}


	public void setPassengerId(int passengerId) {
		this.passengerId = passengerId;
	}


	public int getTicketId() {
		return ticketId;
	}


	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}


	public String getPassengerName() {
		return passengerName;
	}


	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getSeatNumber() {
		return seatNumber;
	}


	public void setSeatNumber(String seatNumber) {
		this.seatNumber = seatNumber;
	}

	// toString() method for easy printing (abstraction)
	@Override
    public String toString() {
        return "Passenger [passengerId=" + passengerId + ", ticketId=" + ticketId + ", passengerName=" + passengerName
                + ", age=" + age + ", gender=" + gender + ", seatNumber=" + seatNumber + "]";
    }
}
