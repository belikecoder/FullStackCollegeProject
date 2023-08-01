package model;

public class Train {
    private int trainId;
    private String trainName;
    private String sourceStation;
    private String destinationStation;
    private String departureTime;
    private String arrivalTime;
    private int totalSeats;

    public Train(int trainId, String trainName, String sourceStation, String destinationStation,
                 String departureTime, String arrivalTime, int totalSeats) {
        this.trainId = trainId;
        this.trainName = trainName;
        this.sourceStation = sourceStation;
        this.destinationStation = destinationStation;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.totalSeats = totalSeats;
    }

    //Getters settera code for(Encapsulation)
    
    // toString() method for easy printing (abstraction)

    @Override
    public String toString() {
        return "Train [trainId=" + trainId + ", trainName=" + trainName + ", sourceStation=" + sourceStation
                + ", destinationStation=" + destinationStation + ", departureTime=" + departureTime
                + ", arrivalTime=" + arrivalTime + ", totalSeats=" + totalSeats + "]";
    }

	public int getTrainId() {
		return trainId;
	}

	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}

	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	public String getSourceStation() {
		return sourceStation;
	}

	public void setSourceStation(String sourceStation) {
		this.sourceStation = sourceStation;
	}

	public String getDestinationStation() {
		return destinationStation;
	}

	public void setDestinationStation(String destinationStation) {
		this.destinationStation = destinationStation;
	}

	public String getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}

	public String getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public int getTotalSeats() {
		return totalSeats;
	}

	public void setTotalSeats(int totalSeats) {
		this.totalSeats = totalSeats;
	}
}
