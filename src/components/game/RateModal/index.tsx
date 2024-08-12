import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { Input, Modal } from "antd";
import useAxios from "@/hooks/useAxios";
import Button from "@/compontents/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RateNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function RateModal({ open, onOk, onCancel, gameId }) {
  const router = useRouter();
  const rateRef = useRef(null);
  const [rateNumber, setRateNumber] = useState<number>();
  const [active, setActive] = useState<number>();

  const {
    data: rateData,
    error: rateError,
    loading: rateLoading,
    fetchData: rateFetchData,
  } = useAxios({
    url: `/api/game_review_create`,
    method: "POST",
  });

  const rate = async () => {
    try {
      const inputValue = rateRef.current.resizableTextArea.textArea.value;
      console.log(rateRef);
      if (!inputValue) {
        toast.error("Please input comment.");
        return false;
      }
      if (!rateNumber) {
        toast.error("Please rate this game.");
        return false;
      }
      rateFetchData({
        game_id: Number(gameId),
        content: inputValue,
        point: rateNumber,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!rateLoading && rateData) {
      if (rateData?.code === 0) {
        toast.success("Rate submitted.");
        onOk();
      }
    }
  }, [rateLoading]);

  return (
    <>
      <Modal
        open={open}
        title={null}
        width={640}
        okButtonProps={{ loading: rateLoading }}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        <div className={styles.modal}>
          <div className={styles.modalTitle}>Write a review</div>
          <div className={styles.modalDesc}>
            Please describe what you liked or disliked about this game and
            whether you recommend it to others. Please remember to be polite and
            follow the Rules and Guidelines.
          </div>
          <div className={styles.modalForm}>
            <div className={styles.textAreaTitle}>
              <div className={styles.label}>
                Your Review <span>*</span>
              </div>
            </div>
            <Input.TextArea
              ref={rateRef}
              count={{ show: true, max: 500 }}
              rows={4}
            />
            <div className={styles.rateBox}>
              <label>Choose a rating:</label>
              <div className={styles.rateNumberList}>
                {RateNumbers.map((item) => {
                  return (
                    <span
                      key={item}
                      onClick={() => {
                        setActive(item);
                        setRateNumber(item);
                      }}
                      className={`${
                        active === item ? styles.activeNumber : ""
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.buttonWrap}>
            <Button
              size="default"
              style={{ padding: "8px 16px" }}
              onClick={rate}
              loading={rateLoading}
            >
              <div className={styles.oCardBtn}>
                <span>Sumbit Your Review</span>
              </div>
            </Button>
          </div>
        </div>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
      />
    </>
  );
}
