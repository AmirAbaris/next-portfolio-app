import { Button } from "@nextui-org/button";

type PrimaryButtonProps = {
    children: React.ReactNode;
    radius?: 'none' | 'full';
    variant?: 'bordered' | 'solid' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    customColor?: 'black' | 'white';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = ({ children, radius = 'full', variant = 'bordered', customColor }: PrimaryButtonProps) => {
    // Determine the custom color classes
    const customColorClass = customColor === 'black'
        ? 'bg-black text-white'
        : customColor === 'white'
            ? 'bg-white text-black'
            : '';

    return (
        <Button
            className={`font-semibold hover:bg-black hover:text-white ${customColorClass}`}
            radius={radius}
            variant={variant}
        >
            {children}
        </Button>
    );
}

export default PrimaryButton;
