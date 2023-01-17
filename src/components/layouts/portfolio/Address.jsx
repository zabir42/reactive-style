import style from "../portfolio/Address.module.css";

const Address = ({address, add_info}) => {
  return (
    <section>
      
          <div className={style.address}>
            <div className={style.address_item}>
              <h4>
                {address} <span>{add_info}</span>
              </h4>
            </div>
          </div>
    </section>
  );
};

export default Address;
