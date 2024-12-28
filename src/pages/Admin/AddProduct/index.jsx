import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
  function AddProduct(){


    const validationSchema = Yup.object({
      title: Yup.string()
        .min(3, 'min 3 herf olmalidir')
        .max(50, 'Too Long!')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    });

    const initialValues={
        title: '',
        lastName: '',
        email: '',
    }

   
   const  onSubmit=(values) => {
      console.log(values);
    }
    
    return( 
       <Formik

       validationSchema={validationSchema}
       onSubmit={onSubmit}
       initialValues={initialValues}

         
         
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="title" />
            {errors.title && touched.title ? (
              <div>{errors.title}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    )}

    export default AddProduct
       
      
