export interface PassengerFormData {
    nombre: string;
    apellido: string;
    nacionalidad: string;
    tipoDocumento: string;
    quantity: string;   
    fechaNacimiento: string;
    genero: string;
    codigoArea:string;
    telefono: string;
    email: string;
    cc: string;
   
  }
  
  export interface PassengerFormModalProps {
    isOpen: boolean;
    onFormSubmit: (formData: PassengerFormData) => void;
    onCancel: () => void;
    seat: string;
  }
  