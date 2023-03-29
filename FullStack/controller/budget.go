package controller

import (
	"initializers"
	"models"

	"github.com/gin-gonic/gin"
)

func createBudget(c *gin.Context) {
	var b struct {
		Parent string //Get parent string from API
	}
	c.Bind(&b)

	budget := models.Budget{Parent: b.Parent} //Create budget
	finalBudget := initializers.DB.Create(&budget)

	if finalBudget.Error != nil {
		c.status(400)
		return
	}

	c.JSON(200, gin.H{
		"budget": budget, //Return budget
	})
}

func deleteBudget(c *gin.Context) {
	name := c.Param("name")                        //Find the name of the budget to delete
	initializers.DB.Delete(&models.Budget{}, name) //Delete the budget
	c.status(200)                                  //Report status of budget
}

func getBudget(c *gin.Context) {

}

func listBudget(c *gin.Context) {

}

func patchBudget(c *gin.Context) {

}
