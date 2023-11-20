import ajax from "@/common/ajax";
import mock from "../mock/index";
import { MessageAPi, ResponseData, LoginApi, PowerApi, MenuInfoApi, UserListApi, ResponseUserInfo, VisitorApi, VisitorListApi, MenuResponse, MenuListResponse } from "@/types"

const request = import.meta.env.REACT_APP_MOCK === "1" ? mock : ajax;

export const getMenu = () => request.get("/getmenu") as Promise<MenuResponse>;
export const getMenuList = () => request.get("/getmenulist") as Promise<MenuListResponse>;
export const login = (data: any) => request.post("/login", data) as Promise<LoginApi>;
export const addMenu = (data: any) => request.post("/addmenu", data) as Promise<ResponseData>;
export const addMsg = (data: any) => request.post("/addmessage", data) as Promise<ResponseData>;
export const getMsg = (data: any) => request.get("/getmessage", data) as Promise<MessageAPi>;
export const getPower = () => request.get("/getpower") as Promise<PowerApi>;
export const delMenu = (data: any) => request.post("/delmenu", data) as Promise<ResponseData>;
export const getMenuInfo = (data: any) => request.get("/getmenuinfo", data) as Promise<MenuInfoApi>;
export const editMenu = (data: any) => request.post("/editmenuinfo", data) as Promise<ResponseData>;
export const getVisitorList = (data: any) => request.get("/getiplist", data) as Promise<VisitorListApi>;
export const getVisitorData = () => request.get("/getvisitordata") as Promise<VisitorApi>;
export const getUserList = (data: any) => request.get("/getuserlist", data) as Promise<UserListApi>;
export const addUser = (data: any) => request.post("/adduserinfo", data) as Promise<ResponseData>;
export const getUser = (data: any) => request.get("/getuserinfo", data) as Promise<ResponseData & { data: ResponseUserInfo }>;
export const editUser = (data: any) => request.post("/edituserinfo", data) as Promise<ResponseData>;
export const editType = (data: any) => request.post("/edittype", data) as Promise<ResponseData>;
export const addType = (data: any) => request.post("/addtype", data) as Promise<ResponseData>;
export const getFeedBack = (data: any) => request.post("/getfeedback", data) as Promise<ResponseData>;
export const reply = (data: any) => request.post("/reply", data) as Promise<ResponseData>;

