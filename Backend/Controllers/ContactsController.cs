using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Backend.Models;
using System.Web.Http.Cors;

namespace Backend.Controllers
{
    [EnableCors(
            origins: "*",
            headers: "*",
            methods: "*")]
    public class ContactsController : ApiController
    {
        private QuizEntities db = new QuizEntities();

        // GET: api/Contacts
        [Route("api/Contacts/byclass/{classid}")]
        public IQueryable<Contact> GetContact(string classId)
        {
            Guid guid = Guid.Parse(classId);
            IQueryable<Contact> dt = db.Contact.AsNoTracking();

            if(guid != null)
            {
                dt = dt.Where(p => p.ClassId == guid);
            }

            return dt;
        }

        // GET: api/Contacts/5
        [ResponseType(typeof(Contact))]
        public IHttpActionResult GetContact(Guid id)
        {
            Contact contact = db.Contact.Find(id);
            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }

        // PUT: api/Contacts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContact(Guid id, Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contact.ContactId)
            {
                return BadRequest();
            }

            db.Entry(contact).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Contacts
        [ResponseType(typeof(Contact))]
        public IHttpActionResult PostContact(ContactPostViewModel contactPostViewModel)
        {
            Contact contact = new Contact();
            contact.ContactId = Guid.NewGuid();
            contact.ClassId = contactPostViewModel.ClassId;
            contact.Name = contactPostViewModel.Name;
            contact.Sex = contactPostViewModel.Sex;
            contact.Phone = contactPostViewModel.Phone;
            contact.Address = contactPostViewModel.Address;
            contact.Email = contactPostViewModel.Email;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Contact.Add(contact);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ContactExists(contact.ContactId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = contact.ContactId }, contact);
        }

        // DELETE: api/Contacts/5
        [ResponseType(typeof(Contact))]
        public IHttpActionResult DeleteContact(Guid id)
        {
            Contact contact = db.Contact.Find(id);
            if (contact == null)
            {
                return NotFound();
            }

            db.Contact.Remove(contact);
            db.SaveChanges();

            return Ok(contact);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactExists(Guid id)
        {
            return db.Contact.Count(e => e.ContactId == id) > 0;
        }
    }
}