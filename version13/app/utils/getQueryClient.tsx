import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

// 요청 당 하나의 쿼리클라이언트를 사용하기 위함
export default cache(() => new QueryClient());
