import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DateTimeInput from "../components/DateTimeInput";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NotificationControl from "../components/NotificationControl";

const DetailPage = () => {
  const { id } = useParams();

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (id) setIsDisabled(true);
  }, [id]);

  const handleOnDelete = () => {
    console.log("delete todo");
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />

      <div className="flex flex-col gap-4 p-4 bg-neutral-50 overflow-scroll h-[83%] no-scrollbar">
        <p className="text-lg font-medium">Design for home page</p>
        <DateTimeInput isDisabled={isDisabled} />
        <NotificationControl isDisabled={isDisabled} />

        <p className="shadow-medium px-5 py-3 rounded-sm text-neutral-weak text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          fringilla enim ac risus porttitor malesuada. Duis varius, risus sed
          accumsan dictum, ipsum sem ornare leo, rutrum gravida nibh lectus sed
          eros. Suspendisse sagittis, justo in ultrices feugiat, libero eros
          gravida nunc, a fringilla nibh tellus sagittis ipsum. Phasellus in
          enim orci. Curabitur vestibulum sapien non consectetur elementum.
          Mauris ut sagittis justo, faucibus mollis ex. Integer semper semper
          lorem malesuada posuere. Nulla a arcu tellus. Duis in ullamcorper
          arcu, id vestibulum turpis. Nam facilisis turpis ac justo facilisis
          dictum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Recusandae quasi saepe facilis quo nostrum quaerat modi? Dolorem dicta
          fuga pariatur ipsam incidunt, ullam iste beatae error adipisci!
          Excepturi, natus veritatis! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Praesentium minima officia modi, qui, repellendus
          corporis aliquid odio delectus voluptatem saepe eius illo inventore
          enim recusandae? Fuga deserunt eum praesentium quis.
        </p>
      </div>

      <Footer actionType="detail" onClick={handleOnDelete} />
    </div>
  );
};

export default DetailPage;
