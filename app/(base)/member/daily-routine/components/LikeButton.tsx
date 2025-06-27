"use client";

import { MessageLikeDto } from "@/application/usecase/message-like/dto/MessageLikeDto";
import { useMessageLikes } from "@/hooks/useMessageLikes";
import styles from "./LikeButton.module.scss";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

type LikeButtonProps = {
    isLiked: Boolean;
    likeCount: number;
    messageLikeDto: MessageLikeDto;
};

export default function LikeButton(props: LikeButtonProps) {
    // local state to manage the like status
    const [liked, setLiked] = useState(props.isLiked);
    const [count, setCount] = useState(props.likeCount);

    useEffect(() => {
        {
            setLiked(props.isLiked);
            setCount(props.likeCount);
        }
    }, []);
    const messageLikes = useMessageLikes();

    const toggleLike = async () => {
        const newLiked = !liked;

        setLiked(newLiked);
        setCount((prev) => prev + (newLiked ? 1 : -1));

        try {
            if (newLiked) {
                await messageLikes.createMessageLike(
                    props.messageLikeDto.messageId,
                );
            } else {
                await messageLikes.deleteMessageLike(
                    props.messageLikeDto.messageId,
                );
            }
        } catch (error) {
            console.error(`Error toggling like status: ${error}`);
            setLiked(liked);
            setCount((prev) => prev + (newLiked ? -1 : 1));
        }
    };

    return (
        <button className={styles.button} onClick={toggleLike}>
            <Heart
                size={18}
                fill={liked ? "var(--color-red)" : "none"}
                stroke="var(--color-red)"
            />
            <span>{count}</span>
        </button>
    );
}
