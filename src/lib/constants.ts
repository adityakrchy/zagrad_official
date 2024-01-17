const handleKeyPressForInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow only numeric key presses (0-9)
    const numericRegex = /^[0-9]$/;
    const isValidInput = numericRegex.test(e.key);

    if (!isValidInput) {
        e.preventDefault();
    }
};

export {handleKeyPressForInput};