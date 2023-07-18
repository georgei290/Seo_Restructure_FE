import { ReactNode } from "react";

export interface iRegister {
	email?: string;
	password?: string;
	userName?: string;
}

export interface iSign {
	email?: string;
	password?: string;
}

export interface iEmail {
	email?: string;
}
export interface iPassword {
	password?: string;
}

export interface User {
	_id?: string;
	email: string;
	password: string;
}

export interface iProps {
  children?: ReactNode;
}
