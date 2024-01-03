"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/core/QueryClient";
import { Provider } from "react-redux";
import { store } from "@/core/ReduxProvider/store";
import "@/core/AxiosInterceptor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
