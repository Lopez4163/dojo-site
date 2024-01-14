const validateForm = (name, email, password) => {
    let newErrors = {};

    if (!name.trim()) {
        newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
        newErrors.email = 'Email is required';
    }

    if (!password.trim()) {
        newErrors.password = 'Password is required';
    }

    return newErrors;
};

export default validateForm;
