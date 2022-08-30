import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"

const ShippingAddress = () => {
  const { customer } = useMeCustomer()
  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 bg-amber-100 p-4">
          <p className="text-small-regular">
            {`Witaj ${customer.first_name}, chcesz użyć jednego z twoich zapisanych adresów?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <div className="grid grid-cols-1 gap-y-2">
            <Input
              label="Email"
              {...register("email", {
                required: "Email wymagany",
                pattern: emailRegex,
              })}
              autoComplete="email"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Imię"
                {...register("shipping_address.first_name", {
                  required: "Imię wymagane",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Nazwisko"
                {...register("shipping_address.last_name", {
                  required: "Nazwisko wymagane",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <Input
              label="Firma"
              {...register("shipping_address.company")}
              autoComplete="organization"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Adres"
              {...register("shipping_address.address_1", {
                required: "Adres wymagany",
              })}
              autoComplete="address-line1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Dodatkowe informacje..."
              {...register("shipping_address.address_2")}
              autoComplete="address-line2"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-[180px_1fr] gap-x-2">
              <Input
                label="Kod pocztowy"
                {...register("shipping_address.postal_code", {
                  required: "Kod pocztowy wymagany",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Miasto"
                {...register("shipping_address.city", {
                  required: "Miasto wymagane",
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <CountrySelect
              {...register("shipping_address.country_code", {
                required: "Kraj wymagany",
              })}
              autoComplete="country"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Województwo"
              {...register("shipping_address.province")}
              autoComplete="address-level1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Telefon"
              {...register("shipping_address.phone")}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
            />
          </div>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
