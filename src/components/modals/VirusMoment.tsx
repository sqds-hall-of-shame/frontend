import { Modal } from "@/components/ui/Modal";

interface Props {
  onClose: () => never | void;
}

export const VirusMoment: React.FC<Props> = ({ onClose }: Props) => (
  <Modal title="Hallo Sir" onClose={onClose}>
    <p className="dark:text-white mx-16 my-8">
      Your computare has vairus <span style={{ fontSize: "3px" }}>:3</span>
    </p>
  </Modal>
);

export default VirusMoment;
