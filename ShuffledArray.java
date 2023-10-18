package assignment;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class ShuffledArray {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the size of Array");
		int n=sc.nextInt();
		int[] array=new int[n];
		for (int i = 0; i < array.length; i++) {
			array[i]=sc.nextInt();
		}

		Random rand = new Random();

		for (int i = 0; i < array.length; i++) {
			int randomIndexToSwap = rand.nextInt(array.length);
			int temp=array[randomIndexToSwap];
			array[randomIndexToSwap]=array[i];
			array[i]=temp;
		}
		System.out.println(Arrays.toString(array));
		sc.close();
	}

}
