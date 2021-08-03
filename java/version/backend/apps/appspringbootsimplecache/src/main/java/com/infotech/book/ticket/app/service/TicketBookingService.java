package com.infotech.book.ticket.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.infotech.book.ticket.app.dao.TicketBookingDao;
import com.infotech.book.ticket.app.entities.Ticket;

@Service
public class TicketBookingService {

	@Autowired
	private TicketBookingDao ticketBookingDao;

	@Cacheable(value = "ticketsCache", key = "#ticketId")
	public Optional<Ticket> getTicketById(Integer ticketId) {
		return ticketBookingDao.findById(ticketId);
	}

	@CacheEvict(value = "ticketsCache", key = "#ticketId")
	public void deleteTicket(Integer ticketId) {
		ticketBookingDao.deleteById(ticketId);
	}

	@CachePut(value = "ticketsCache", key = "#ticketId")
	public Ticket updateTicket(Integer ticketId, String newEmail) {
		Optional<Ticket> ticketFromDb = ticketBookingDao.findById(ticketId);
		if (ticketFromDb.isPresent()) {
			Ticket ticket = ticketFromDb.get();
			ticket.setEmail(newEmail);
			Ticket updatedTicket = ticketBookingDao.save(ticket);
			return updatedTicket;
		} else {
			return null;
		}

	}
}
