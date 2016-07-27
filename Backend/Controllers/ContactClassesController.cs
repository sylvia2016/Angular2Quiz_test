﻿using System;
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

namespace Backend.Controllers
{
    public class ContactClassesController : ApiController
    {
        private QuizEntities db = new QuizEntities();

        // GET: api/ContactClasses
        public IQueryable<ContactClass> GetContactClass()
        {
            return db.ContactClass;
        }

        // GET: api/ContactClasses/5
        [ResponseType(typeof(ContactClass))]
        public IHttpActionResult GetContactClass(Guid id)
        {
            ContactClass contactClass = db.ContactClass.Find(id);
            if (contactClass == null)
            {
                return NotFound();
            }

            return Ok(contactClass);
        }

        // PUT: api/ContactClasses/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContactClass(Guid id, ContactClass contactClass)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contactClass.ClassId)
            {
                return BadRequest();
            }

            db.Entry(contactClass).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactClassExists(id))
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

        // POST: api/ContactClasses
        [ResponseType(typeof(ContactClass))]
        public IHttpActionResult PostContactClass(ContactClass contactClass)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ContactClass.Add(contactClass);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ContactClassExists(contactClass.ClassId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = contactClass.ClassId }, contactClass);
        }

        // DELETE: api/ContactClasses/5
        [ResponseType(typeof(ContactClass))]
        public IHttpActionResult DeleteContactClass(Guid id)
        {
            ContactClass contactClass = db.ContactClass.Find(id);
            if (contactClass == null)
            {
                return NotFound();
            }

            db.ContactClass.Remove(contactClass);
            db.SaveChanges();

            return Ok(contactClass);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactClassExists(Guid id)
        {
            return db.ContactClass.Count(e => e.ClassId == id) > 0;
        }
    }
}