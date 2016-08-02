﻿namespace Backend.Models
{
    public class ContactPostViewModel
    {
        public System.Guid ContactId { get; set; }
        public System.Guid ClassId { get; set; }
        public string Name { get; set; }
        public int Sex { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
    }
}