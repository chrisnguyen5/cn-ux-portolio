import React from "react";
import Image from "next/image";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://assets.aceternity.com/code-solution.png"
        secondImage="https://public.boxcloud.com/api/2.0/internal_files/2004682234805/versions/2212878258005/representations/png_paged_2048x2048/content/1.png?access_token=1!B_fY3goPdbYwiRLyYPhxy9Z4r3TEUH5NV5501ZcLD9TS9lcJCZe-21EEZjOjFqn8LT0F2doe4G6lt2fQTy94ItXQTseBczP8s0s5Wi1oU-ZvmsUgh9QusYjlDhQG7xdi2c9YWfZjiVcxPCTlv2Rr1AVwYzaPb2ntD_xJAqKqPNoupJTNV0tykafWCjcsT5ZOEiHP9R3qTa9GyZOaf90dz1pKRt9yd4pzEKLQ_01Ah-AickXtRTL1T8kpohOoZnKuaX2GHv737hDijU-PecsmC8SZv6xN5nwYq13fFN-5Zk0N7P1DpzfPUTmf7E_tobyx4qOvzxUQ0ZOoWAixLERi-UmIJsB3viu4-FMSQ6NA7Aodwiw76uCGZGkfD1-B6iYejguuBomVKJP3JdIrLJdL7O_J-DHBcZsVD-jKMOlPeUkILAmRIutvrq5tjY9XWL7IqbRpv3CB3q6KSr9MqVjn-gBIvULSRdqMWio4EQl_LQshr_i14F0ow_cWTi3IjBAmRvjLRBuPmI7yhbdJRF-vzjB-ehRwZoBzGx92dlR-6A5nQXvpygEL2T23oKuGnKviuFooZpdFtcXKbCjecSySaqD31q4-NAqBM02HGvZNlEBmzhI7oswcNz_J0S0FFqLVYidyHOk2TJoReMkxCY6oUNhAiOM7UcbkpgC9RqJXM8lGlo02bGZxrJUHkvuCJ9l3YZjPAlWFdcmj7Gsevqh0Gy6bJqL0zBsILzzormk7IzqwBflzhZFcmuGeHD8CqLOGUher9aDLGVWrLmBLe4ZizsO5l_8zczg.&box_client_name=box-content-preview&box_client_version=3.12.0"
        // src="/public/"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover"
        className="h-[250px] w-[350px] md:h-[600px] md:w-[700px]"
        slideMode="hover"
      />
    </div>
  );
}
