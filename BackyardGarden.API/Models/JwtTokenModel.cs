﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackyardGarden.API.Models
{
    public class JwtTokenModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
