import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from '../admin/sideBar'
import AlertifyService from "../../services/admin/alertifyService.js"
import AlertifyOptions from "../../services/admin/alertifyService.js"
import { AlertifyMessageType, AlertifyPosition } from "../../services/admin/alertifyService.js"
import '../../tailwind.css';
import 'alertifyjs/build/css/alertify.css';


export default function AdminDashborad() {
    let alertifyService = new AlertifyService();
    const message = () => alertifyService.message("Welcome to the Admin Dashboard");

    const dismis = () => alertifyService.dismiss;
    return (
        <div className="bg-[#1da1f2]">
            <SideBar />
            <Outlet />
            <button onClick={() => { message() }} >Message</button>
            <button className="m-1" onClick={() => { dismis() }} >Sil</button>
        </div>


    )
}
