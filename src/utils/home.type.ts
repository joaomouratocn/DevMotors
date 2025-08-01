export interface HomeProps {
	data: {
		SAUDACAO: {
			greetText: string;
			greetBanner: {
				url: string;
			};
		};
		SOBRE: {
			description: string;
			aboutImage: {
				url: string
			}
		};
		SERVICOS: ServiceProps[];
		ACAO: {
			buttonText: string;
			buttonUrl: string;
		};
		CONTATO: {
			phone: string;
			email: string;
		};
	};
}

export interface ServiceProps {
	servicename: string;
	serviceImage: {
		url: string;
	};
}

/**
 * {
	"data": {
		"id": 2,
		"documentId": "wxusct8t94lkgrm9bsgwt4pd",
		"createdAt": "2025-07-31T14:08:34.009Z",
		"updatedAt": "2025-07-31T14:16:37.959Z",
		"publishedAt": "2025-07-31T14:16:38.021Z",
		"locale": "pt-BR",
		"SAUDACAO": {
			"id": 2,
			"greetText": "Bem vindo a oficina Dev Motors",
			"greetBanner": [
				{
					"id": 7,
					"documentId": "u0mlb30g13lp14ok5q8dcajv",
					"name": "background.jpg",
					"alternativeText": null,
					"caption": null,
					"width": 1280,
					"height": 618,
					"formats": {
						"thumbnail": {
							"name": "thumbnail_background.jpg",
							"hash": "thumbnail_background_b8742714b6",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 245,
							"height": 118,
							"size": 8.85,
							"sizeInBytes": 8852,
							"url": "/uploads/thumbnail_background_b8742714b6.jpg"
						},
						"medium": {
							"name": "medium_background.jpg",
							"hash": "medium_background_b8742714b6",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 750,
							"height": 362,
							"size": 49.54,
							"sizeInBytes": 49541,
							"url": "/uploads/medium_background_b8742714b6.jpg"
						},
						"small": {
							"name": "small_background.jpg",
							"hash": "small_background_b8742714b6",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 500,
							"height": 241,
							"size": 27.28,
							"sizeInBytes": 27284,
							"url": "/uploads/small_background_b8742714b6.jpg"
						},
						"large": {
							"name": "large_background.jpg",
							"hash": "large_background_b8742714b6",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 1000,
							"height": 483,
							"size": 74.8,
							"sizeInBytes": 74796,
							"url": "/uploads/large_background_b8742714b6.jpg"
						}
					},
					"hash": "background_b8742714b6",
					"ext": ".jpg",
					"mime": "image/jpeg",
					"size": 104.79,
					"url": "/uploads/background_b8742714b6.jpg",
					"previewUrl": null,
					"provider": "local",
					"provider_metadata": null,
					"createdAt": "2025-07-31T11:26:49.729Z",
					"updatedAt": "2025-07-31T11:26:49.729Z",
					"publishedAt": "2025-07-31T11:26:49.730Z"
				}
			]
		},
		"SOBRE": {
			"id": 2,
			"description": "Desde 2025, trabalhando para entregar os melhores serviços para nossos clientes.",
			"aboutImage": {
				"id": 8,
				"documentId": "k5670s96kg2oslbwf8yyjkla",
				"name": "imgmotors.png",
				"alternativeText": null,
				"caption": null,
				"width": 357,
				"height": 415,
				"formats": {
					"thumbnail": {
						"name": "thumbnail_imgmotors.png",
						"hash": "thumbnail_imgmotors_f82af079e5",
						"ext": ".png",
						"mime": "image/png",
						"path": null,
						"width": 134,
						"height": 156,
						"size": 58.42,
						"sizeInBytes": 58415,
						"url": "/uploads/thumbnail_imgmotors_f82af079e5.png"
					}
				},
				"hash": "imgmotors_f82af079e5",
				"ext": ".png",
				"mime": "image/png",
				"size": 77.66,
				"url": "/uploads/imgmotors_f82af079e5.png",
				"previewUrl": null,
				"provider": "local",
				"provider_metadata": null,
				"createdAt": "2025-07-31T11:26:49.967Z",
				"updatedAt": "2025-07-31T11:26:49.967Z",
				"publishedAt": "2025-07-31T11:26:49.968Z"
			}
		},
		"SERVICOS": [
			{
				"id": 15,
				"servicename": "Troca de Oléo",
				"serviceImage": {
					"id": 4,
					"documentId": "u82z9ys27uua2xjg2vt77dj4",
					"name": "img4.jpg",
					"alternativeText": null,
					"caption": null,
					"width": 604,
					"height": 751,
					"formats": {
						"thumbnail": {
							"name": "thumbnail_img4.jpg",
							"hash": "thumbnail_img4_e3c7c7f779",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 126,
							"height": 156,
							"size": 5.93,
							"sizeInBytes": 5931,
							"url": "/uploads/thumbnail_img4_e3c7c7f779.jpg"
						},
						"medium": {
							"name": "medium_img4.jpg",
							"hash": "medium_img4_e3c7c7f779",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 603,
							"height": 750,
							"size": 62.49,
							"sizeInBytes": 62488,
							"url": "/uploads/medium_img4_e3c7c7f779.jpg"
						},
						"small": {
							"name": "small_img4.jpg",
							"hash": "small_img4_e3c7c7f779",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 402,
							"height": 500,
							"size": 34.03,
							"sizeInBytes": 34025,
							"url": "/uploads/small_img4_e3c7c7f779.jpg"
						}
					},
					"hash": "img4_e3c7c7f779",
					"ext": ".jpg",
					"mime": "image/jpeg",
					"size": 62.94,
					"url": "/uploads/img4_e3c7c7f779.jpg",
					"previewUrl": null,
					"provider": "local",
					"provider_metadata": null,
					"createdAt": "2025-07-31T11:26:49.567Z",
					"updatedAt": "2025-07-31T11:26:49.567Z",
					"publishedAt": "2025-07-31T11:26:49.567Z"
				}
			},
			{
				"id": 16,
				"servicename": "Alinhamento e balanciamento",
				"serviceImage": {
					"id": 3,
					"documentId": "r27syx0fe9dw5ui3xihah4mm",
					"name": "img1.jpg",
					"alternativeText": null,
					"caption": null,
					"width": 604,
					"height": 604,
					"formats": {
						"thumbnail": {
							"name": "thumbnail_img1.jpg",
							"hash": "thumbnail_img1_ca80398437",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 156,
							"height": 156,
							"size": 9.44,
							"sizeInBytes": 9435,
							"url": "/uploads/thumbnail_img1_ca80398437.jpg"
						},
						"small": {
							"name": "small_img1.jpg",
							"hash": "small_img1_ca80398437",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 500,
							"height": 500,
							"size": 61.99,
							"sizeInBytes": 61993,
							"url": "/uploads/small_img1_ca80398437.jpg"
						}
					},
					"hash": "img1_ca80398437",
					"ext": ".jpg",
					"mime": "image/jpeg",
					"size": 82.76,
					"url": "/uploads/img1_ca80398437.jpg",
					"previewUrl": null,
					"provider": "local",
					"provider_metadata": null,
					"createdAt": "2025-07-31T11:26:49.422Z",
					"updatedAt": "2025-07-31T12:31:20.248Z",
					"publishedAt": "2025-07-31T11:26:49.425Z"
				}
			},
			{
				"id": 17,
				"servicename": "Multi-Marcas",
				"serviceImage": {
					"id": 2,
					"documentId": "irg1jw6s21reatorb8ibwlf6",
					"name": "1FLP00991.jpg",
					"alternativeText": null,
					"caption": null,
					"width": 1280,
					"height": 720,
					"formats": {
						"thumbnail": {
							"name": "thumbnail_1FLP00991.jpg",
							"hash": "thumbnail_1_FLP_00991_52a0431758",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 245,
							"height": 138,
							"size": 9.62,
							"sizeInBytes": 9621,
							"url": "/uploads/thumbnail_1_FLP_00991_52a0431758.jpg"
						},
						"small": {
							"name": "small_1FLP00991.jpg",
							"hash": "small_1_FLP_00991_52a0431758",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 500,
							"height": 281,
							"size": 36,
							"sizeInBytes": 36001,
							"url": "/uploads/small_1_FLP_00991_52a0431758.jpg"
						},
						"large": {
							"name": "large_1FLP00991.jpg",
							"hash": "large_1_FLP_00991_52a0431758",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 1000,
							"height": 563,
							"size": 125.71,
							"sizeInBytes": 125708,
							"url": "/uploads/large_1_FLP_00991_52a0431758.jpg"
						},
						"medium": {
							"name": "medium_1FLP00991.jpg",
							"hash": "medium_1_FLP_00991_52a0431758",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 750,
							"height": 422,
							"size": 75.36,
							"sizeInBytes": 75364,
							"url": "/uploads/medium_1_FLP_00991_52a0431758.jpg"
						}
					},
					"hash": "1_FLP_00991_52a0431758",
					"ext": ".jpg",
					"mime": "image/jpeg",
					"size": 170.19,
					"url": "/uploads/1_FLP_00991_52a0431758.jpg",
					"previewUrl": null,
					"provider": "local",
					"provider_metadata": null,
					"createdAt": "2025-07-30T18:06:46.873Z",
					"updatedAt": "2025-07-30T18:06:46.873Z",
					"publishedAt": "2025-07-30T18:06:46.874Z"
				}
			},
			{
				"id": 18,
				"servicename": "Tudo para seu carro",
				"serviceImage": {
					"id": 5,
					"documentId": "fhyzn9kjo5yud3no1lfcl7ij",
					"name": "img3.jpg",
					"alternativeText": null,
					"caption": null,
					"width": 604,
					"height": 751,
					"formats": {
						"thumbnail": {
							"name": "thumbnail_img3.jpg",
							"hash": "thumbnail_img3_e6b59c9b79",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 126,
							"height": 156,
							"size": 5.5,
							"sizeInBytes": 5501,
							"url": "/uploads/thumbnail_img3_e6b59c9b79.jpg"
						},
						"medium": {
							"name": "medium_img3.jpg",
							"hash": "medium_img3_e6b59c9b79",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 603,
							"height": 750,
							"size": 54.19,
							"sizeInBytes": 54193,
							"url": "/uploads/medium_img3_e6b59c9b79.jpg"
						},
						"small": {
							"name": "small_img3.jpg",
							"hash": "small_img3_e6b59c9b79",
							"ext": ".jpg",
							"mime": "image/jpeg",
							"path": null,
							"width": 402,
							"height": 500,
							"size": 30.64,
							"sizeInBytes": 30635,
							"url": "/uploads/small_img3_e6b59c9b79.jpg"
						}
					},
					"hash": "img3_e6b59c9b79",
					"ext": ".jpg",
					"mime": "image/jpeg",
					"size": 54,
					"url": "/uploads/img3_e6b59c9b79.jpg",
					"previewUrl": null,
					"provider": "local",
					"provider_metadata": null,
					"createdAt": "2025-07-31T11:26:49.609Z",
					"updatedAt": "2025-07-31T11:26:49.609Z",
					"publishedAt": "2025-07-31T11:26:49.609Z"
				}
			}
		],
		"ACAO": {
			"id": 7,
			"buttonText": "Contate-nos",
			"buttonUrl": "www.google.com.br"
		},
		"CONTATO": {
			"id": 2,
			"phone": "(16) 99137-6210",
			"email": "joaoubamit@gmail.com"
		}
	},
	"meta": {}
}
 */
