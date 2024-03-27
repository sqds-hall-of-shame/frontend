import { HOS } from "@/components/icons/HOS";
import { Spinner } from "@/components/ui/Spinner";

export const Index: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center my-8">
        <HOS className="size-12 mr-3 rounded-lg" />

        <p className="text-4xl animate-gradient">
          <strong>sqd's hall of shame</strong>
        </p>
      </div>

      <div className="absolute-center">
        <Spinner />
      </div>
    </>
  );
};

export default Index;
