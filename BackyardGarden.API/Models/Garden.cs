using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackyardGarden.API.Models
{
    public class Garden
    {
        public int GardenId { get; set; }
        public string GardenName { get; set; }
        public int UserId { get; set; }
        public string DateStarted { get; set; }
        public string PhotoFileName { get; set; }
    }
}
