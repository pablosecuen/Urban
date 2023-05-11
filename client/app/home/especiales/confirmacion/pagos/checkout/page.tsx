"use client";
import axios from "axios";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import success from "../../../../../../../assets/imagenes/success.png";
import { useState } from "react";
import CardCheckout from "@component/components/Cards/CardCheckout";

export default function Checkout() {

  return <CardCheckout />;
}
