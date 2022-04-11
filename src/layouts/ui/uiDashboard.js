import React from 'react'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../bootstrapCustom.scss';
import "bootstrap/dist/js/bootstrap.js";

import Footer from './footer'
import Navi from './navi'

import ToasterService from "../../services/ui/toastrService.js"
import 'toastr/toastr.scss';

export default function UiDashboard() {
    let toastrService = new ToasterService()
    const message = () => toastrService.message("Serkan", "Aydın");

    return (

        <div>

            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 ">01</div>
                <div className="row-span-3 ">02</div>
                <div className="row-span-2  ">03</div>
                <button onClick={() => { message() }} >Message</button>
            </div>
            <Navi />
            <Outlet />
            <Footer />
        </div>


    )
}
