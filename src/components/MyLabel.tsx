import "./mylable.css";

export interface MyLabelProps {
  /**
   * Texto del label?
   */
  label: string;
  /**
   * Tamaños del label?
   */
  size: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalización de letras?
   */
  allCaps?: boolean;

  /**
   * Colores del label?
   */
  color?: "primary" | "secondary" | "tertiary";

  /**
   * Custom color del label?
   */
  fontColor?: string;

   /**
   * backgroundColor del label?
   */
   backgroundColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
  backgroundColor='transparent'
}: MyLabelProps) => {
  return (
    <span
      className={` label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor: backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
