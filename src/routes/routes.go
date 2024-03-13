package routes

import (
	"fmt"
	"net/http"
	"path"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {
	router := mux.NewRouter();

	router.HandleFunc("/static", GetStaticpage).Methods("GET")
	// router.HandleFunc("/", GetHomepage).Methods("GET")
	// router.PathPrefix("/").Handler(http.FileServer(http.Dir("../../dist/views/index.html")))
	
	return router
}

func GetHomepage(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1>Homepage!</h1>"));
}

func GetStaticpage(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Serving Static...")

	p := path.Dir("./index.html")
	fmt.Printf("%v and %v", &p, p)
	w.Header().Set("Content-Type", "text/html")
	http.ServeFile(w, r, p)
}