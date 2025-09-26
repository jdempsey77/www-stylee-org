package main

import (
	"fmt"
	"os"
)

func main() {
	// This will trigger security warnings
	password := "admin123"  // Hardcoded password
	fmt.Println("Debug message")  // Debug code
	
	// This will trigger SQL injection warning
	query := "SELECT * FROM users WHERE id = " + os.Getenv("USER_ID")
	fmt.Printf("Query: %s\n", query)
}
