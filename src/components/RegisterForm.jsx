import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchema } from '../schemas/RegisterSchema';

function RegisterForm() {

    const submit = (values, action) => {
        console.log(values);
        console.log(action);

    }

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
        validationSchema: registerFormSchema,
        onSubmit: submit


    });
    return (


        <div className='main-div'>
            <h1 className='title'>ÜYE OL</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-div">
                    <label>Email</label>
                    <input type="email" value={values.email} id="email" placeholder='Email giriniz'
                        onChange={handleChange} />
                    {errors.email && <p className='input-errors'>{errors.email}</p>}
                </div>
                <div className="input-div">
                    <label>Yaş</label>
                    <input type="number" value={values.age} id="age" placeholder='Yaşınızı giriniz'
                        onChange={handleChange} />
                    {errors.age && <p className='input-errors'>{errors.age}</p>}
                </div>
                <div className="input-div">
                    <label>Şifre</label>
                    <input type="password" value={values.password} id="password" placeholder='Şifrenizi giriniz'
                        onChange={handleChange} />
                    {errors.password && <p className='input-errors'>{errors.password}</p>}
                </div>
                <div className="input-div">
                    <label>Şifre Tekrarı</label>
                    <input type="password" value={values.confirmPassword} id="confirmPassword" placeholder='Şifrenizi tekrar giriniz'
                        onChange={handleChange} />
                    {errors.confirmPassword && <p className='input-errors'>{errors.confirmPassword}</p>}


                </div>
                <div className="input-div" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                    <input style={{ width: "18px", height: "18px", marginRight: "10px" }} type="checkbox" value={values.term} id="term"
                        onChange={handleChange} />
                    <label >Kullanım sözleşmesini kabul ediyorum</label>
                </div>
                {errors.term && <p className='input-errors'>{errors.term}</p>}
                <button type='submit' className='submit-button'>Kaydet</button>

            </form>
        </div>
    )
}

export default RegisterForm