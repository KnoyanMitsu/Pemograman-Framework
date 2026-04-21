import { NextResponse } from "next/server";
import withAuth from "./Middleware/withAuth";

export default withAuth(
  async (req) => {
    return NextResponse.next(); // Harus return Response!
  },
  ["/dashboard", "/profile"],
);
