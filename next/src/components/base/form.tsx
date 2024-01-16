import React, { useState } from "react";
import { Base } from ".";

export default function Form() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  //     // const { query } = useRoute();
  // const formData = reactive({ ...query });

  // const validate = (state: any): FormError[] => {
  // 	const errors = [];
  // 	if (!state.email) errors.push({ path: 'email', message: 'Required' });

  // 	return errors;
  // };

  // async function submitForm() {
  // 	loading.value = true;

  // 	try {
  // 		await useDirectus(
  // 			createItem('inbox', {
  // 				data: formData,
  // 				form: props.form.id,
  // 			}),
  // 		);

  // 		success.value = true;

  // 		if (props.form.on_success === 'redirect') {
  // 			return navigateTo(props.form.redirect_url);
  // 		}
  // 	} catch (err: any) {
  // 		error.value = err;
  // 	} finally {
  // 		loading.value = false;
  // 	}
  // }
  return (
    <div>
      <div className='mb-4'>
        {/* <Base.Alert v-if="error" type="error">Oops! {{ error }}</Base.Alert>
			<Base.Alert v-if="form.on_success === 'message' && success" type="success">
				{{ form.success_message ?? 'Success! Your form has been submitted.' }}
			</Base.Alert> */}
      </div>
      <div>
        {/* <FormCustom
				v-if="!success"
				:schema="props.form.schema"
				:state="formData"
				:validate="validate"
				className="grid gap-6 md:grid-cols-6"
				:on-submit="submitForm"
			/> */}
      </div>
    </div>
  );
}
