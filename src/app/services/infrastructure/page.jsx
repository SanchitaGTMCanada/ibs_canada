import ServicePage from "@/components/services/ServicePage";
import { serviceData } from "@/components/services/serviceData";

export default function InfrastructurePage() {
  return (
    <ServicePage
      data={serviceData.infrastructure}
    />
  );
}