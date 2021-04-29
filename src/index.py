"""
Simple script for take off and control with arrow keys
"""

import time

import dronekit
from dronekit import connect, VehicleMode, LocationGlobalRelative, Command, LocationGlobal
from pymavlink import mavutil

# - Importing Tkinter: sudo apt-get install python-tk
import Tkinter as tk

# -- Connect to the vehicle
print('Connecting...')
vehicle = connect('udp:127.0.0.1:14550')

# -- Setup the commanded flying speed
gnd_speed = 5  # [m/s]
# -- Define arm and takeoff
def arm_and_takeoff(altitude):
    while not vehicle.is_armable:
        print("waiting to be armable")
        time.sleep(1)

    print("Arming motors")
    vehicle.mode = VehicleMode("GUIDED")
    vehicle.armed = True

    while not vehicle.armed: time.sleep(1)

    print("Taking Off")
    vehicle.simple_takeoff(altitude)

    while True:
        v_alt = vehicle.location.global_relative_frame.alt
        print(">> Altitude = %.1f m" % v_alt)

        if v_alt >= altitude - 1.0:
            print("Target altitude reached")
            break
        time.sleep(1)


# -- Define the function for sending mavlink velocity command in body frame
def set_velocity_body(vehicle, vx, vy, vz):
    """ Remember: vz is positive downward!!!
    http://ardupilot.org/dev/docs/copter-commands-in-guided-mode.html

    Bitmask to indicate which dimensions should be ignored by the vehicle
    (a value of 0b0000000000000000 or 0b0000001000000000 indicates that
    none of the setpoint dimensions should be ignored). Mapping:
    bit 1: x,  bit 2: y,  bit 3: z,
    bit 4: vx, bit 5: vy, bit 6: vz,
    bit 7: ax, bit 8: ay, bit 9:


    """
    msg = vehicle.message_factory.set_position_target_local_ned_encode(
        0,
        0, 0,
        mavutil.mavlink.MAV_FRAME_BODY_NED,
        0b0000111000000111,  # -- BITMASK -> Consider only the velocities
        0, 0, 0,  # -- POSITION
        vx, vy, vz,  # -- VELOCITY
        0, 0, 0,  # -- ACCELERATIONS
        0, 0)
    vehicle.send_mavlink(msg)
    vehicle.flush()

# -- Define the function for sending a target coordinate to go


coordinates = {
    'lon': -37.36222556,
    'lat': 149.16458965,
    'alt': 60,
}


def move_to_target(target_coordinates):
    new_target_coordinates = LocationGlobalRelative(target_coordinates['lon'], target_coordinates['lat'], 60)
    vehicle.simple_goto(new_target_coordinates)
    current_position(target_coordinates)



# -- Define the function for sending the current drone position


def current_position(target_coordinates):
    while True:
        current_lat = vehicle.location.global_relative_frame.lat
        current_lon = vehicle.location.global_relative_frame.lon
        print(">> Latitude = %.8f m" % current_lat, " >> Latitude = %.8f m" % current_lon)

        if (current_lat >= target_coordinates['lat'] - 1.0) & (current_lon >= target_coordinates['lon'] - 1.0):
            print("Target reached")
            break
        time.sleep(1)

# -- Key event function
def key(event):
    if event.char == event.keysym:  # -- standard keys
        if event.keysym == 'm':
            print("m pressed >> Set the vehicle to RTL")
            if(vehicle.mode == "RTL"):
                vehicle.mode = VehicleMode("GUIDED")

            if(vehicle.mode == "GUIDED"):
                vehicle.mode = VehicleMode("RTL")

    else:  # -- non standard keys
        if event.keysym == 'Up':
            move_to_target(coordinates)

# ---- MAIN FUNCTION
# - Takeoff


print(vehicle.location.global_relative_frame.alt)
if vehicle.location.global_relative_frame.alt <= 1:
    arm_and_takeoff(50)

# - Read the keyboard with tkinter

root = tk.Tk()
print(">> Control the drone with the arrow keys. Press r for RTL mode")
root.bind_all('<Key>', key)
root.mainloop()

