import React from "react";
import "./Review.css";

export default function Review() {
  return (
    <>
      <center>
        <h1 className="mar">Costumer Reviews</h1>
      </center>
      <div className="contaner mar-1">
        <div className="contaner-1">
          <div className="div-img">
            <img
              className="img"
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="text-1">
            <h3>Jabed Rahman</h3>
            <p>Client</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo nemo aut a ab cum voluptates in error temporibus
              itaque sapiente, nesciunt, enim beatae et saepe vero perferendis
              dignissimos eveniet.
            </p>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
          </div>
        </div>
        <div className="contaner-1">
          <div className="div-img">
            <img
              className="img"
              src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="text-1">
            <h3>Monica Wegase</h3>
            <p>Client</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo nemo aut a ab cum voluptates in error temporibus
              itaque sapiente, nesciunt, enim beatae et saepe vero perferendis
              dignissimos eveniet.
            </p>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
          </div>
        </div>
        <div className="contaner-1">
          <div className="div-img">
            <img
              className="img"
              src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="text-1">
            <h3>Natallia Moe</h3>
            <p>Client</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo nemo aut a ab cum voluptates in error temporibus
              itaque sapiente, nesciunt, enim beatae et saepe vero perferendis
              dignissimos eveniet.
            </p>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
            <i class="fa-solid fa-star clr"></i>
          </div>
        </div>
      </div>
    </>
  );
}
