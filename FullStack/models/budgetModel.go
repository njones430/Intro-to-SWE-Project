package model

import (
	"gorm.io/gorm"
)

type Budget struct {
	gorm.Model
	name string
	displayName string
	parent string
	budgetFilter object (Filter)
	amount object (BudgetAmount)
	thresholdRules[] object (Threshold Rule)
	allUpdatesRule object (AllUpdatesRule)
	etag string


}