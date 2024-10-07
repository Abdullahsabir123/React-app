import React from "react";
import Cards from "./Cards";
import "./Hero.css";

export default function Herosection() {
  return (
    <>
            <center><h1 className="mar">Products</h1></center>
      <div className="dis">
        {/* card 1 */}
        <Cards
          title="Bike"
          img="https://images.pexels.com/photos/5365737/pexels-photo-5365737.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or motor-assisted, pedal-driven, single-track vehicle, with two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist."
        />
        {/* card 2 */}
        <Cards
          title="Aeroplane"
          img="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="An aeroplane is an aircraft that has wings fixed in place and is propelled by thrust. They are also known as airplanes in American English or planes in informal speech You can see planes in the sky and at airports"
        />
        {/* card 3 */}
        <Cards
          title="Air baloon"
          img="https://images.pexels.com/photos/163314/hot-air-balloon-balloon-sky-hot-air-balloon-ride-163314.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="The hot air balloon is the oldest form of flying technology that can successfully carry people. The earliest use of hot air to make objects fly was made in Ancient China. Paper lanterns were sent into the air for signalling."
        />
        {/* card 4 */}
        <Cards
          title="Boat"
          img="https://images.pexels.com/photos/6585322/pexels-photo-6585322.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="A boat is a vehicle used to travel on water. It is smaller than a ship and can be lifted out of the water and carried on a ship. Some boats have sails, some are powered by rowing with oars, and some use motors. Those that use steam engines are steamboats."
        />
        {/* card 5 */}
        <Cards
          title="Train"
          img="https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="Trains are designed to a certain gauge, or distance between rails. Most trains operate on steel tracks with steel wheels, the low friction of which makes them more efficient than other forms of transport. Trains have their roots in wagonways, which used railway tracks and were powered by horses or pulled by cables."
        />
        {/* card 6 */}
        <Cards
          title="Car"
          img="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600"
          text="A car is a means of transport used for traveling from one place to another. This is a four-wheeler used by individuals or family members. We all use cars in our daily lives to go from one place to another for work. A car is a beautiful vehicle that has comfortable seats, AC, and windows."
        />
      </div>
    </>
  );
}
