
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using BackyardGarden.API.Models;
using Microsoft.AspNetCore.Cors;


namespace BackyardGarden.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GardenController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public GardenController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [EnableCors("AllowOrigin")]
        public JsonResult Get()
        {
            string query = @"
                select GardenId, GardenName from dbo.Garden";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BackyardGardenCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        [EnableCors("AllowOrigin")]
        public JsonResult Post(Garden dep)
        {
            string query = @"
                insert into dbo.Garden values
                 ('" + dep.GardenName + @"')
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BackyardGardenCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        [EnableCors("AllowOrigin")]
        public JsonResult Put(Garden dep)
        {
            string query = @"
                 update dbo.Garden set 
                 GardenName = '" + dep.GardenName + @"'
                 where GardenId = " + dep.GardenId + @"
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BackyardGardenCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        [EnableCors("AllowOrigin")]
        public JsonResult Delete(int id)
        {
            string query = @"
                 delete from dbo.Garden
                 where GardenId = " + id + @"
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BackyardGardenCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}
