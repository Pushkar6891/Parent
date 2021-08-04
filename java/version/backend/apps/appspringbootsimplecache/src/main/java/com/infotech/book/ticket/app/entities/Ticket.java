package com.infotech.book.ticket.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="ticket")
@Data
public class Ticket {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ticket_id")
	private Integer ticketId;
	
	@Column(name="passenger_name",nullable=false)
	private String passengerName;
	
	@Column(name="booking_date",nullable=false)
	private Date bookingDate;
	
	@Column(name="source_station",nullable=false)
	private String sourceStation;
	
	@Column(name="dest_station",nullable=false)
	private String destStation;
	
	@Column(name="email")
	private String email;
	
}
