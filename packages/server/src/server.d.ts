/// <reference types="@anchor/typings" />
import "@anchor/typings/enum";
import type { Context, Next } from "koa";

declare type MiddleWareFn = (ctx: Context & CustomContext, next: Next) => void;
