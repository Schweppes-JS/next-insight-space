"use client";

import { useEffect } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    setTimeout(() => toast("Uh oh! Something went wrong.", { description: error.message }), 500);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Card>
        <CardHeader>
          <h2>Something went wrong!</h2>
        </CardHeader>
        <CardContent>
          <Button onClick={() => reset()}>Try again</Button>
        </CardContent>
      </Card>
    </div>
  );
}
