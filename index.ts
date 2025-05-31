#!/usr/bin/env bun

import Elysia from "elysia";

const filderExists = await Bun.file('.adsa').exists()

console.log(filderExists);

console.log("Hello!");
console.log(process.argv);

const app = new Elysia()