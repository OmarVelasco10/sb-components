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
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
