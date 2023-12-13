"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { trpc } from "../_trpc/client";

interface UpgradeButtonProps {}

const UpgradeButton: React.FC<UpgradeButtonProps> = ({}) => {
  const { mutate: createStripeSession } = trpc.createStripeSession.useMutation({
    onSuccess: ({ url }) => {
      window.location.href = url ?? "dashboard/billing";
    },
  });

  return (
    <Button className="w-full" onClick={() => createStripeSession()}>
      Upgrade now <ArrowRight className="h-5 w-5 ml-1.5" />
    </Button>
  );
};
export default UpgradeButton;
