package main

import (
	"log"
	"net/http"
	"time"
	// "github.com/ATLAS2002/el-gato/routes"
)

func main() {
	log.Println("Go backend server starting on port 8080")
	
	// router := routes.Router()
	staticDir := http.Dir("../dist/views/home/index.html");
	fileServer := http.FileServer(staticDir)

	// router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

	// })
		http.Handle("/", http.StripPrefix("/", fileServer))
	
	srv := &http.Server{
		// Handler: router,
		Addr: "localhost:8080",

		ReadTimeout: 20 * time.Second,
		WriteTimeout: 20 * time.Second,
	}

	log.Fatal(srv.ListenAndServe())
}